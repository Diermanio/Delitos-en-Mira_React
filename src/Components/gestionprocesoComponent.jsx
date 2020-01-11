import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DateTimePicker from "./datetimepickerComponent";
import { Combobox } from "react-widgets";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return [
    "Seleccione la ubicacion del delito en el mapa",
    "Indique el tipo del delito",
    "Indique la fecha del delito",
    "Escriba detalles del delito",
    "Envie los datos"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div id="map" class="mapWindow"></div>;
    case 1:
      return (
        <React.Fragment>
          <div class="span4">
            <Combobox data={["asd", "asdasd"]} defaultValue={"Robo"} />
          </div>
          <div class="span12"></div>
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <div class="span4">
            <DateTimePicker />
          </div>
          <div class="span12"></div>
        </React.Fragment>
      );
    case 3:
      return (
        <React.Fragment>
          <div class="row">
            <div class="span8">
              <textarea
                id="detalle"
                class="input-block-level"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Describe el delito a detalle"
              ></textarea>
            </div>
          </div>
        </React.Fragment>
      );
    case 4:
      return (
        <div id="enviarcrimen" class="btn btn-theme">
          Enviar
        </div>
      );
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div class="offset4">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      id="regresar"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Regresar
                    </Button>
                    <Button
                      id="siguiente"
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Terminar"
                        : "Siguiente"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Todos los pasos se han completado.</Typography>
            <Button
              id="reiniciar"
              onClick={handleReset}
              className={classes.button}
            >
              Reiniciar
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
}
