import {
  faDocker,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 font-semibold">
        <div className="text-center">
          <FontAwesomeIcon icon={faPhp} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">PHP</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faRust} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">Rust</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">Java</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faJs} style={{color: "#c20000",}} className="h-10" />
          <p className="text-white">JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDocker} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">Docker</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faVuejs} style={{color: "#c20000",}} className="h-10 " />
          <p className="text-white">Vue.js</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
