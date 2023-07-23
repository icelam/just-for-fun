type Maybe<T> = T | undefined | null;

class ScratchCanvas {
  private canvas: HTMLCanvasElement | null;
  private context: Maybe<CanvasRenderingContext2D>;
  private canvasWidth: number;
  private canvasHeight: number;
  private removableLayerColor: string;
  private isDrawing = false;
  private resetButton: HTMLButtonElement | null;

  constructor(
    canvasSelector: string,
    resetButtonSelector: string,
    fillColor: string,
  ) {
    this.canvas = canvasSelector
      ? document.querySelector(canvasSelector)
      : null;
    this.resetButton = resetButtonSelector
      ? document.querySelector(resetButtonSelector)
      : null;
    this.removableLayerColor = fillColor;

    if (!this.canvas) {
      throw new Error('NULLISH_CANVAS');
    }

    this.context = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
  }

  /* Get mouse pointer position */
  private getMousePosition(event: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return { x, y };
  }

  /* Get mobile touch position */
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

  /* Mouse Down function */
  private canvasMouseDown(event: MouseEvent) {
    this.isDrawing = true;
    const { x, y } = this.getMousePosition(event);
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  /* Mouse Move function */
  private canvasMouseMove(event: MouseEvent) {
    if (this.isDrawing) {
      const { x, y } = this.getMousePosition(event);
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }

  /* Mouse Up function */
  private canvasMouseUp(event: MouseEvent) {
    if (this.isDrawing) {
      const { x, y } = this.getMousePosition(event);
      this.context.lineTo(x, y);
      this.context.stroke();
      this.isDrawing = false;
    }
  }

  /* Touch Start function */
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

  /* Touch Move function */
  private canvasTouchMove(event: TouchEvent) {
    event.preventDefault();

    if (this.isDrawing) {
      const { touchX, touchY } = this.getTouchPosition(event);
      this.context.lineTo(touchX, touchY);
      this.context.stroke();
    }
  }

  /* Touch End function */
  private canvasTouchEnd(event: TouchEvent) {
    // End Drawing
    const { touchX, touchY } = this.getTouchPosition(event);
    this.context.lineTo(touchX, touchY);
    this.context.stroke();
    this.isDrawing = false;
  }

  /* Fill canvas with removable layer */

  addRemovableLayer() {
    this.context.globalCompositeOperation = 'source-over';
    this.context.fillStyle = this.removableLayerColor;
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.globalCompositeOperation = 'destination-out';
  }

  /* Init */
  init() {
    if (!this.context) {
      throw new Error('NULLISH_CONTEXT');
    }

    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 30;
    this.context.strokeStyle = '#000000';
    this.addRemovableLayer();

    // Listeners - mouse pointer
    // 'mousemove' and 'mouseup' is attached to window instead of canvas
    // to properly end drawing when mouse releases outside of canvas
    const onMouseDown = (event: MouseEvent) => {
      this.canvasMouseDown(event);
    };

    const onMouseMove = (event: MouseEvent) => {
      this.canvasMouseMove(event);
    };

    const onMouseUp = (event: MouseEvent) => {
      this.canvasMouseUp(event);
    };

    this.canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Listeners - touch devices
    const onTouchStart = (event: TouchEvent) => {
      this.canvasTouchStart(event);
    };

    const onTouchMove = (event: TouchEvent) => {
      this.canvasTouchMove(event);
    };

    const onTouchEnd = (event: TouchEvent) => {
      this.canvasTouchEnd(event);
    };

    this.canvas.addEventListener('touchstart', onTouchStart);
    this.canvas.addEventListener('touchmove', onTouchMove);
    this.canvas.addEventListener('touchend', onTouchEnd);

    // Reset scratch area
    const onReset = (event: MouseEvent) => {
      this.addRemovableLayer();
    };

    this.resetButton.addEventListener('click', onReset);
  }
}

// Parcel has duplicate events attached when hot reload
// This workaround is suggested by the official member:
// https://github.com/parcel-bundler/parcel/issues/1718#issuecomment-404608947
module?.hot?.dispose(() => {
  window.location.reload();
});

const LotteryScratchCanvas = new ScratchCanvas(
  '#scratch-canvas',
  '#scratch-reset-button',
  '#B7B7B7',
);

LotteryScratchCanvas.init();
