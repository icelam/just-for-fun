import { Tab } from './components';
import { PreviewWrapper } from './layouts';
import './styles/index.scss';

export default function App() {
  return (
    <PreviewWrapper title="React Tab Component">
      <Tab tabs={['Tab 1', 'Tab 2', 'Tab 3']}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit
            amet mauris commodo quis imperdiet. Ut porttitor leo a diam
            sollicitudin tempor id eu. Risus nec feugiat in fermentum posuere
            urna. Sed euismod nisi porta lorem. Id porta nibh venenatis cras.
            Fusce id velit ut tortor pretium viverra. Tellus rutrum tellus
            pellentesque eu tincidunt tortor aliquam. Sed cras ornare arcu dui
            vivamus. Turpis tincidunt id aliquet risus feugiat in ante. Dictumst
            vestibulum rhoncus est pellentesque elit. Purus gravida quis blandit
            turpis cursus in hac habitasse. Lectus nulla at volutpat diam ut
            venenatis tellus in metus. Quis ipsum suspendisse ultrices gravida
            dictum fusce.
          </p>
          <p>
            Non enim praesent elementum facilisis leo vel. Ultrices mi tempus
            imperdiet nulla. Nibh mauris cursus mattis molestie a. Interdum
            consectetur libero id faucibus nisl tincidunt eget. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper. Odio euismod
            lacinia at quis risus sed vulputate odio. Faucibus interdum posuere
            lorem ipsum dolor sit. Morbi enim nunc faucibus a pellentesque sit
            amet. Ornare arcu dui vivamus arcu felis. Pellentesque eu tincidunt
            tortor aliquam nulla facilisi cras fermentum. Hendrerit dolor magna
            eget est lorem. Vestibulum sed arcu non odio euismod lacinia at
            quis. Maecenas pharetra convallis posuere morbi leo.
          </p>
          <p>
            Bibendum est ultricies integer quis auctor elit sed. Imperdiet dui
            accumsan sit amet nulla facilisi morbi. Curabitur gravida arcu ac
            tortor dignissim convallis aenean et tortor. Dignissim enim sit amet
            venenatis. Cras adipiscing enim eu turpis egestas pretium aenean
            pharetra magna. Tortor condimentum lacinia quis vel eros donec.
            Lorem donec massa sapien faucibus et molestie ac feugiat sed.
            Tristique senectus et netus et malesuada fames ac. At quis risus sed
            vulputate odio ut enim blandit volutpat. Praesent tristique magna
            sit amet purus gravida quis. Et malesuada fames ac turpis.
          </p>
        </div>
        <div className="container">
          <p>
            Faucibus a pellentesque sit amet porttitor. Blandit volutpat
            maecenas volutpat blandit aliquam etiam erat. Quis varius quam
            quisque id diam vel quam.
          </p>
        </div>
        <div className="container">
          <p>
            Id donec ultrices tincidunt arcu non sodales neque sodales.
            Consectetur libero id faucibus nisl tincidunt eget nullam. Tempor
            nec feugiat nisl pretium. Ipsum dolor sit amet consectetur. Odio eu
            feugiat pretium nibh ipsum. Tempus imperdiet nulla malesuada
            pellentesque elit eget gravida cum sociis. Pharetra sit amet aliquam
            id diam maecenas ultricies mi. Erat velit scelerisque in dictum non
            consectetur a. Ultricies lacus sed turpis tincidunt id aliquet risus
            feugiat in. Mauris sit amet massa vitae tortor. Egestas dui id
            ornare arcu odio ut sem nulla. Elit at imperdiet dui accumsan sit.
            Integer vitae justo eget magna. Sit amet tellus cras adipiscing enim
            eu turpis egestas. Id semper risus in hendrerit gravida. Purus ut
            faucibus pulvinar elementum integer enim. Ac tortor vitae purus
            faucibus ornare. Faucibus a pellentesque sit amet porttitor. Blandit
            volutpat maecenas volutpat blandit aliquam etiam erat. Quis varius
            quam quisque id diam vel quam.
          </p>
        </div>
      </Tab>
    </PreviewWrapper>
  );
}
