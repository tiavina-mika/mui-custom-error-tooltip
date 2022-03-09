import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const message =
  "Le montant minimum de commande n’est pas atteint. Il manque 18 € pour atteindre ce minimum.";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center"
  },
  productLabel: {
    display: "flex",
    alignItems: "center"
  },
  titleError: {
    marginRight: 7,
    color: "#FF5D5A"
  },
  errorIcon: {
    color: "#FF5D5A",
    cursor: "pointer",
    fontSize: 20
  },
  errorTooltip: {
    backgroundColor: "#FF5D5A",
    fontSize: 14
  },
  arrow: {
    color: "#FF5D5A"
  }
});
const CustomTooltip = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.productLabel}>
        <Typography className={classes.titleError}>
          Montant des produits
        </Typography>
        <Tooltip
          placement="top"
          title={message}
          enterDelay={500}
          leaveDelay={200}
          arrow
          classes={{
            tooltip: classes.errorTooltip,
            arrow: classes.arrow
          }}
        >
          <InfoIcon className={classes.errorIcon} />
        </Tooltip>
      </div>
    </div>
  );
};

export default CustomTooltip;
