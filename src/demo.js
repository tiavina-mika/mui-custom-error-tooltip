import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const message =
  "Le montant minimum de commande n’est pas atteint. Il manque [montant minimum de commande - montant global des produits] € pour atteindre ce minimum.";
export default function DelayTooltips() {
  return (
    <Typography>
      <Tooltip placement="top" title="Add" enterDelay={500} leaveDelay={200}>
        <InfoIcon />
      </Tooltip>
    </Typography>
  );
}
