type Maybe<T> = T | undefined | null;

class ScratchCanvas {
  /** Canvas element */
  private canvas: HTMLCanvasElement;
  /** Web animation of canvas */
  private canvasAnimation: Animation;
  /** Canvas context */
  private context: CanvasRenderingContext2D;
  /** Width of canvas */
  private canvasWidth: number;
  /** Height of canvas */
  private canvasHeight: number;
  /** Fill color of removable layer */
  private removableLayerColor: string;
  /** Whether user is interacting with canvas */
  private isDrawing = false;
  /** Prize text element */
  private prizeText: HTMLSpanElement;
  /** Web animation of prize text */
  private prizeTextAnimation: Animation;
  /** Reset button element */
  private resetButton: HTMLButtonElement;
  /** Debounce duration for checking whether prize text is visible */
  private checkDebounceDuration = 100;
  /** Has user won the prize */
  private hasWon = false;

  constructor(
    canvasSelector: string,
    prizeTextSelector: string,
    resetButtonSelector: string,
    fillColor: string,
  ) {
    const canvasElement = canvasSelector
      ? document.querySelector<HTMLCanvasElement>(canvasSelector)
      : null;
    const prizeTextElement = prizeTextSelector
      ? document.querySelector<HTMLSpanElement>(prizeTextSelector)
      : null;
    const resetButtonElement = resetButtonSelector
      ? document.querySelector<HTMLButtonElement>(resetButtonSelector)
      : null;

    if (!canvasElement) {
      throw new Error('NULLISH_CANVAS');
    }

    if (!prizeTextElement) {
      throw new Error('NULLISH_PRIORITY_TEXT');
    }

    if (!resetButtonElement) {
      throw new Error('NULLISH_RESET_BUTTON');
    }

    this.canvas = canvasElement;
    this.prizeText = prizeTextElement;
    this.resetButton = resetButtonElement;

    const context = this.canvas.getContext('2d', { willReadFrequently: true });

    if (!context) {
      throw new Error('NULLISH_CONTEXT');
    }

    this.context = context;
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.removableLayerColor = fillColor;

    this.canvasAnimation = this.canvas.animate(
      [
        { opacity: '1' },
        { opacity: '0' },
      ],
      {
        duration: 200,
        easing: 'ease-in-out',
        iterations: 1,
        fill: 'forwards'
      }
    );

    this.canvasAnimation.cancel();

    this.prizeTextAnimation = this.prizeText.animate(
      [
        { transform: 'none' },
        { transform: 'scale(1.125)' },
        { transform: 'none' }
      ],
      {
        duration: 600,
        easing: 'ease-in-out',
        iterations: 1,
        fill: 'forwards'
      }
    );

    this.prizeTextAnimation.cancel();
  }

  /** Get mouse pointer position */
  private getMousePosition(event: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return { x, y };
  }

  /** Get mobile touch position */
  private getTouchPosition(event: TouchEvent) {
    const rootElem = document.documentElement;
    const rect = this.canvas.getBoundingClientRect();

    const top = rect.top + window.pageYOffset - rootElem.clientTop;
    const left = rect.left + window.pageXOffset - rootElem.clientLeft;

    const touch = event.targetTouches[0] || event.changedTouches[0];
    const touchX = touch.pageX - left;
    const touchY = touch.pageY - top;

    return { touchX, touchY };
  }

  /** Mouse Down function */
  private canvasMouseDown(event: MouseEvent) {
    this.isDrawing = true;
    const { x, y } = this.getMousePosition(event);
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  /** Mouse Move function */
  private canvasMouseMove(event: MouseEvent) {
    if (this.isDrawing) {
      const { x, y } = this.getMousePosition(event);
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }

  /** Mouse Up function */
  private canvasMouseUp(event: MouseEvent) {
    if (this.isDrawing) {
      const { x, y } = this.getMousePosition(event);
      this.context.lineTo(x, y);
      this.context.stroke();
      this.isDrawing = false;
    }
  }

  /** Touch Start function */
  private canvasTouchStart(event: TouchEvent) {
    event.preventDefault();

    if (!this.isDrawing) {
      // Reset status
      this.isDrawing = true;
      const { touchX, touchY } = this.getTouchPosition(event);
      this.context.beginPath();
      this.context.moveTo(touchX, touchY);
    }
  }

  /** Touch Move function */
  private canvasTouchMove(event: TouchEvent) {
    event.preventDefault();

    if (this.isDrawing) {
      const { touchX, touchY } = this.getTouchPosition(event);
      this.context.lineTo(touchX, touchY);
      this.context.stroke();
    }
  }

  /** Touch End function */
  private canvasTouchEnd(event: TouchEvent) {
    // End Drawing
    const { touchX, touchY } = this.getTouchPosition(event);
    this.context.lineTo(touchX, touchY);
    this.context.stroke();
    this.isDrawing = false;
  }

  /** Fill canvas with removable layer */
  addRemovableLayer() {
    this.context.globalCompositeOperation = 'source-over';
    this.context.fillStyle = this.removableLayerColor;
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.globalCompositeOperation = 'destination-out';
  }

  /**
   * Determine if percentage of transparent pixels (black filled area) overlaping with prize text
   * is greater than 80% or not
   */
  isPrizeTextVisible() {
    // Get width and height of prize text here instead of caching when constructor is loaded as
    // CSS might not be completely rendered at that time...
    // FIXME: call init() only when we know CSS is loaded and rendered
    const prizeTextWidth = this.prizeText.clientWidth;
    const prizeTextHeight = this.prizeText.clientHeight;

    const imageData = this.context.getImageData(
      (this.canvasWidth - prizeTextWidth) / 2,
      (this.canvasHeight - prizeTextHeight) / 2,
      prizeTextWidth,
      prizeTextHeight,
    );
    const pixelData = imageData.data;

    let blackPixelCount = 0;

    for (let i = 0; i < pixelData.length; i += 4) {
      const red = pixelData[i];
      const green = pixelData[i + 1];
      const blue = pixelData[i + 2];
      const alpha = pixelData[i + 3];

      if (red === 0 && green === 0 && blue === 0 && alpha === 0) {
        blackPixelCount++;
      }
    }

    const transparentAreaPercentage = blackPixelCount * 100 / (prizeTextWidth * prizeTextHeight);
    return transparentAreaPercentage >= 90;
  }

  /**
   * Show winning animation which applies:
   * 1. Pop-out effect to prize text
   * 2. Fade out effect to removable layer, which is the canvas itself
   */
  async showWinningAnimation() {
    if (this.hasWon) {
      return;
    }

    this.hasWon = true
    this.canvasAnimation.play();
    this.prizeTextAnimation.play();
  }

  /** Function to reset all winning state and animation and reset canvas */
  reset() {
    this.canvasAnimation.cancel();
    this.prizeTextAnimation.cancel();
    this.addRemovableLayer();
    this.hasWon = false;
  }

  /** Initialize by attaching various event listeners to support interaction with canvas */
  init() {
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 30;
    this.context.strokeStyle = '#000000';
    this.addRemovableLayer();

    let prizeTextVisibleCheckTimer: number | undefined = undefined;

    // Listeners - mouse pointer
    // 'mousemove' and 'mouseup' is attached to window instead of canvas
    // to properly end drawing when mouse releases outside of canvas
    const onMouseDown = (event: MouseEvent) => {
      window.clearTimeout(prizeTextVisibleCheckTimer);
      this.canvasMouseDown(event);
    };

    const onMouseMove = (event: MouseEvent) => {
      this.canvasMouseMove(event);
    };

    const onMouseUp = (event: MouseEvent) => {
      this.canvasMouseUp(event);

      // Add a resonable delay so that winning animation does not appear immediately when clicking
      // on reset button since canvas is properly not filled at that point.
      window.clearTimeout(prizeTextVisibleCheckTimer);
      prizeTextVisibleCheckTimer = window.setTimeout(() => {
        if (this.isPrizeTextVisible()) {
          this.showWinningAnimation();
        }
      }, this.checkDebounceDuration);
    };

    this.canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Listeners - touch devices
    const onTouchStart = (event: TouchEvent) => {
      window.clearTimeout(prizeTextVisibleCheckTimer);
      this.canvasTouchStart(event);
    };

    const onTouchMove = (event: TouchEvent) => {
      this.canvasTouchMove(event);
    };

    const onTouchEnd = (event: TouchEvent) => {
      this.canvasTouchEnd(event);
      window.clearTimeout(prizeTextVisibleCheckTimer);
      prizeTextVisibleCheckTimer = window.setTimeout(() => {
        if (this.isPrizeTextVisible()) {
          this.showWinningAnimation();
        }
      }, this.checkDebounceDuration);
    };

    this.canvas.addEventListener('touchstart', onTouchStart);
    this.canvas.addEventListener('touchmove', onTouchMove);
    this.canvas.addEventListener('touchend', onTouchEnd);

    this.resetButton.addEventListener('click', this.reset.bind(this));
  }
}

// Parcel has duplicate events attached when hot reload
// This workaround is suggested by the official member:
// https://github.com/parcel-bundler/parcel/issues/1718#issuecomment-404608947
// @ts-expect-error - `hot` is not defined in node's type definition
module?.hot?.dispose(() => {
  window.location.reload();
});

const LotteryScratchCanvas = new ScratchCanvas(
  '#scratch-canvas',
  '#prize-text',
  '#scratch-reset-button',
  '#B7B7B7',
);

LotteryScratchCanvas.init();
