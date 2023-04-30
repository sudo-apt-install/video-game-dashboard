// interface Props {
//   children: string;
//   color?:
//     | "primary"
//     | "secondary"
//     | "danger"
//     | "warning"
//     | "info"
//     | "light"
//     | "dark";
//   onClick: () => void;
// }

interface Props {
    children: string;
    onClick: () => void;
}

const Button = ({children, onClick}: Props) => {
  return (
    <div>
        <button className="stinkyButton" onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
