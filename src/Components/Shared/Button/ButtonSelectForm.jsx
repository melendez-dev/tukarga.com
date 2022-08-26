import { Box } from "@material-ui/core";

import { CustomButton } from "../../../styles/Shareds/Button.styled";
export default function ButtonSelectForm({ icon, selected, id, setSelected }) {
  return (
    <CustomButton>
      <Box
        className={selected === id ? "selected" : "notSelected"}
        onClick={() => setSelected(id)}
      >
        {icon}
      </Box>
    </CustomButton>
  );
}
