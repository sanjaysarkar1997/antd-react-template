import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const customSwal = (title, text, icon, iconHtml, html, type) => {
  MySwal.fire({
    title: <p>{title}</p>,
    text: <p>{text}</p>,
    html: html,
    icon: icon,
    iconHtml: iconHtml,
    footer: "Copyright 2021",
  });
};

export default customSwal;
