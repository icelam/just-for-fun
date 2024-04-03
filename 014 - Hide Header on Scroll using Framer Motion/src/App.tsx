import './styles/index.scss';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, AnimationProps } from 'framer-motion';
import keyVisual from './images/richard-tao-jlJFU9QBfFc-unsplash.jpg';

const headerAnimation: AnimationProps = {
  initial: 'show',
  variants: {
    show: { opacity: 1 },
    hide: { opacity: 0, pointerEvents: 'none' }
  },
  transition: {
    duration: 0.3
  }
};

export default function App() {
  const didScroll = useRef(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      didScroll.current = true;
    };

    const checkScrollInterval = setInterval(function () {
      if (didScroll.current && headerRef.current) {
        const delta = 5;
        const currentScrollY = window.scrollY;

        if (Math.abs(lastScrollY.current - currentScrollY) <= delta) {
          return;
        }

        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > headerRef.current.clientHeight
        ) {
          setShouldShowHeader(false);
        } else if (currentScrollY < lastScrollY.current) {
          setShouldShowHeader(true);
        }

        lastScrollY.current = currentScrollY;
        didScroll.current = false;
      }
    }, 300);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearInterval(checkScrollInterval);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <article>
        <motion.header
          ref={headerRef}
          style={{ overflow: 'hidden' }}
          {...headerAnimation}
          animate={shouldShowHeader ? 'show' : 'hide'}
          key="header"
        >
          <h3>Website Name.</h3>
        </motion.header>
        <main>
          <figure>
            <img
              src={keyVisual}
              alt="By Richard Tao, https://unsplash.com/photos/cars-parked-on-side-of-the-road-during-daytime-jlJFU9QBfFc"
            />
            <figcaption>
              Lorem ipsum dolor sit amet
              <br />
              <time>6th October, 2023</time>
            </figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            in ornare quam viverra orci sagittis. In ornare quam viverra orci
            sagittis eu volutpat. Maecenas sed enim ut sem. Tortor aliquam nulla
            facilisi cras fermentum odio eu feugiat. Non consectetur a erat nam.
            Convallis convallis tellus id interdum velit. Pulvinar neque laoreet
            suspendisse interdum consectetur libero id. Ipsum nunc aliquet
            bibendum enim facilisis gravida. Sit amet risus nullam eget felis
            eget nunc.
          </p>
          <p>
            Ut pharetra sit amet aliquam id diam maecenas ultricies. Tellus
            mauris a diam maecenas sed. A cras semper auctor neque. Cursus vitae
            congue mauris rhoncus aenean vel elit. Ut placerat orci nulla
            pellentesque dignissim enim sit. Mollis aliquam ut porttitor leo a
            diam sollicitudin. Nulla malesuada pellentesque elit eget. Magnis
            dis parturient montes nascetur. Placerat vestibulum lectus mauris
            ultrices eros in cursus turpis. Lorem ipsum dolor sit amet
            consectetur. Justo eget magna fermentum iaculis eu non. Arcu dictum
            varius duis at consectetur lorem donec massa. Sit amet consectetur
            adipiscing elit ut aliquam purus. Urna cursus eget nunc scelerisque
            viverra. Sed id semper risus in hendrerit gravida rutrum quisque
            non. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. At
            tellus at urna condimentum mattis. Senectus et netus et malesuada.
            Commodo nulla facilisi nullam vehicula. Semper viverra nam libero
            justo laoreet sit amet.
          </p>
          <p>
            Malesuada bibendum arcu vitae elementum curabitur vitae nunc.
            Senectus et netus et malesuada. Facilisis magna etiam tempor orci.
            Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.
            Fusce id velit ut tortor. Habitant morbi tristique senectus et.
            Malesuada fames ac turpis egestas integer eget. Amet mauris commodo
            quis imperdiet massa tincidunt. Vitae auctor eu augue ut. Lorem
            ipsum dolor sit amet consectetur. Hac habitasse platea dictumst
            quisque.
          </p>
          <p>
            Sodales neque sodales ut etiam. Tortor pretium viverra suspendisse
            potenti nullam ac tortor. Risus viverra adipiscing at in tellus
            integer feugiat scelerisque. Senectus et netus et malesuada. Arcu
            non odio euismod lacinia. Sagittis orci a scelerisque purus semper
            eget duis. Sapien nec sagittis aliquam malesuada bibendum arcu.
            Tristique sollicitudin nibh sit amet commodo. Mauris commodo quis
            imperdiet massa tincidunt nunc pulvinar. Egestas diam in arcu cursus
            euismod quis viverra. Massa eget egestas purus viverra. Dictumst
            quisque sagittis purus sit amet. Id diam vel quam elementum pulvinar
            etiam non quam.
          </p>
          <p>
            At quis risus sed vulputate odio. Sit amet dictum sit amet. Amet
            purus gravida quis blandit turpis. Sagittis orci a scelerisque purus
            semper eget duis at. Varius quam quisque id diam. Sit amet
            consectetur adipiscing elit pellentesque habitant morbi tristique.
            Ut tristique et egestas quis ipsum suspendisse ultrices. Libero nunc
            consequat interdum varius sit amet mattis vulputate. In metus
            vulputate eu scelerisque felis. Sed turpis tincidunt id aliquet
            risus feugiat in ante metus. Sagittis aliquam malesuada bibendum
            arcu. Nam at lectus urna duis convallis convallis tellus id. Eu
            tincidunt tortor aliquam nulla facilisi cras. Mattis rhoncus urna
            neque viverra justo nec.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            in ornare quam viverra orci sagittis. In ornare quam viverra orci
            sagittis eu volutpat. Maecenas sed enim ut sem. Tortor aliquam nulla
            facilisi cras fermentum odio eu feugiat. Non consectetur a erat nam.
            Convallis convallis tellus id interdum velit. Pulvinar neque laoreet
            suspendisse interdum consectetur libero id. Ipsum nunc aliquet
            bibendum enim facilisis gravida. Sit amet risus nullam eget felis
            eget nunc.
          </p>
          <p>
            Ut pharetra sit amet aliquam id diam maecenas ultricies. Tellus
            mauris a diam maecenas sed. A cras semper auctor neque. Cursus vitae
            congue mauris rhoncus aenean vel elit. Ut placerat orci nulla
            pellentesque dignissim enim sit. Mollis aliquam ut porttitor leo a
            diam sollicitudin. Nulla malesuada pellentesque elit eget. Magnis
            dis parturient montes nascetur. Placerat vestibulum lectus mauris
            ultrices eros in cursus turpis. Lorem ipsum dolor sit amet
            consectetur. Justo eget magna fermentum iaculis eu non. Arcu dictum
            varius duis at consectetur lorem donec massa. Sit amet consectetur
            adipiscing elit ut aliquam purus. Urna cursus eget nunc scelerisque
            viverra. Sed id semper risus in hendrerit gravida rutrum quisque
            non. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. At
            tellus at urna condimentum mattis. Senectus et netus et malesuada.
            Commodo nulla facilisi nullam vehicula. Semper viverra nam libero
            justo laoreet sit amet.
          </p>
          <p>
            Malesuada bibendum arcu vitae elementum curabitur vitae nunc.
            Senectus et netus et malesuada. Facilisis magna etiam tempor orci.
            Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.
            Fusce id velit ut tortor. Habitant morbi tristique senectus et.
            Malesuada fames ac turpis egestas integer eget. Amet mauris commodo
            quis imperdiet massa tincidunt. Vitae auctor eu augue ut. Lorem
            ipsum dolor sit amet consectetur. Hac habitasse platea dictumst
            quisque.
          </p>
          <p>
            Sodales neque sodales ut etiam. Tortor pretium viverra suspendisse
            potenti nullam ac tortor. Risus viverra adipiscing at in tellus
            integer feugiat scelerisque. Senectus et netus et malesuada. Arcu
            non odio euismod lacinia. Sagittis orci a scelerisque purus semper
            eget duis. Sapien nec sagittis aliquam malesuada bibendum arcu.
            Tristique sollicitudin nibh sit amet commodo. Mauris commodo quis
            imperdiet massa tincidunt nunc pulvinar. Egestas diam in arcu cursus
            euismod quis viverra. Massa eget egestas purus viverra. Dictumst
            quisque sagittis purus sit amet. Id diam vel quam elementum pulvinar
            etiam non quam.
          </p>
          <p>
            At quis risus sed vulputate odio. Sit amet dictum sit amet. Amet
            purus gravida quis blandit turpis. Sagittis orci a scelerisque purus
            semper eget duis at. Varius quam quisque id diam. Sit amet
            consectetur adipiscing elit pellentesque habitant morbi tristique.
            Ut tristique et egestas quis ipsum suspendisse ultrices. Libero nunc
            consequat interdum varius sit amet mattis vulputate. In metus
            vulputate eu scelerisque felis. Sed turpis tincidunt id aliquet
            risus feugiat in ante metus. Sagittis aliquam malesuada bibendum
            arcu. Nam at lectus urna duis convallis convallis tellus id. Eu
            tincidunt tortor aliquam nulla facilisi cras. Mattis rhoncus urna
            neque viverra justo nec.
          </p>
        </main>
      </article>
    </AnimatePresence>
  );
}
