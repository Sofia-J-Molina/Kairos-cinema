import {} from "../footer/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer = () => {
  return (
    <div className="Footer">
      <p>Contactanos:</p>
      <a href="https://www.linkedin.com/in/sof%C3%ADa-j-molina-235168259/">
        <GitHubIcon fontSize="large" />
      </a>

      <a href="https://github.com/Sofia-J-Molina">
        <LinkedInIcon fontSize="large" />
      </a>
      <p>
        © 2023. Todos los Derechos Reservados. Hecho con el ♥ by:
        Sofia-J-Molina.
      </p>
    </div>
  );
};
