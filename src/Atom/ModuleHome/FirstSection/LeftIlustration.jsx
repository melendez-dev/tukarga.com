import { Link } from "react-router-dom";
import { ReactComponent as Ilustration } from "../../../assets/svg/Group_83.svg";
import { Box, Button } from "@material-ui/core";
export default function LeftIlustration() {
  return (
    <Box className="containerIlustration">
      <Ilustration />
      <Button
        variant="contained"
        style={{
          backgroundColor: "#ff6600",
          color: "#fff",
          borderRadius: "8px",
          marginTop: "50px",
          width: "161px",
        }}
      >
        <a
          href="https://admin.tukarga.com/"
          className="text_light_button"
          style={{
						fontSize: "12px",
						textTransform: "capitalize",
            textDecoration: "none",
            color: "white"
          }}
			>
          Más información
        </a>
      </Button>
    </Box>
  );
}
