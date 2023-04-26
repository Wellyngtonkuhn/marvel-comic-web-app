import { Container } from "../../styles/styles";
import { Content, FooterSection } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Content>
          <p>"Data provided by Marvel. © 2023 MARVEL"</p>
          <p>Developed by Wellyngton Kuhn © 2023 MARVEL</p>

          <ul>
            <li>
              <a href="https://github.com/Wellyngtonkuhn" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wellyngtonkuhn" target="_blank" >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="http://marvel.com" target="_blank">
                <FontAwesomeIcon icon={faM} />
              </a>
            </li>
          </ul>
        </Content>
      </Container>
    </FooterSection>
  );
}
