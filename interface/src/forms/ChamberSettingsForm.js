import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';

import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
  loadingSettings: {
    margin: theme.spacing.unit,
  },
  loadingSettingsDetails: {
    margin: theme.spacing.unit * 4,
    textAlign: "center"
  },
  switchControl: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  textField: {
    width: "100%"
  },
  selectField:{
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  button: {
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  }
});

class ChamberSettingsForm extends React.Component {

  createSensorMenuItems(){
    const { chamberSettings } = this.props;

    return (
      <Fragment>
        
      </Fragment>
    );

  }

  render() {
    const { classes, chamberSettingsFetched, chamberSettings, errorMessage, handleValueChange, handleCheckboxChange, onSubmit, onReset } = this.props;
    return (
      <div>
        {
         !chamberSettingsFetched ?

         <div className={classes.loadingSettings}>
           <LinearProgress className={classes.loadingSettingsDetails}/>
           <Typography variant="display1" className={classes.loadingSettingsDetails}>
             Loading...
           </Typography>
         </div>

         : chamberSettings ?

        <ValidatorForm onSubmit={onSubmit}>

          <TextValidator
              validators={['required', 'isFloat', 'minNumber:0', 'maxNumber:25']}
              errorMessages={['Target temperature is required', "Must be a number", "Must be greater than 0 ", "Max value is 25"]}
              name="target_temp"
              label="Target temperature"
              className={classes.textField}
              value={chamberSettings.target_temp}
              type="number"
              onChange={handleValueChange('target_temp')}
              margin="normal"
            />

            <FormControlLabel className={classes.switchControl}
               control={
                 <Switch
                        checked={chamberSettings.enable_heater}
                        onChange={handleCheckboxChange('enable_heater')}
                        value="enable_heater"
                 />
               }
              label="Enable Heater?"
             />

            <TextValidator
                validators={['required', 'isFloat', 'minNumber:0', 'maxNumber:5']}
                errorMessages={['Hysteresis high is required', "Must be a number", "Must be greater than 0 ", "Max value is 5"]}
                name="hysteresis_high"
                label="Hysteresis high"
                className={classes.textField}
                value={chamberSettings.hysteresis_high}
                type="number"
                onChange={handleValueChange('hysteresis_high')}
                margin="normal"
            />

            <TextValidator
                validators={['required', 'isNumber', 'minNumber:0', 'maxNumber:3600000']}
                errorMessages={['Hysteresis high is required', "Must be a number", "Must be greater than 0 ", "Max value is 3600000"]}
                name="min_heater_on_duration"
                label="min_heater_on_duration high"
                className={classes.textField}
                value={chamberSettings.min_heater_on_duration}
                type="number"
                onChange={handleValueChange('min_heater_on_duration')}
                margin="normal"
            />

            <TextValidator
                validators={['required', 'isNumber', 'minNumber:0', 'maxNumber:3600000']}
                errorMessages={['Hysteresis high is required', "Must be a number", "Must be greater than 0 ", "Max value is 3600000"]}
                name="min_heater_off_duration"
                label="min_heater_off_duration high"
                className={classes.textField}
                value={chamberSettings.min_heater_off_duration}
                type="number"
                onChange={handleValueChange('min_heater_off_duration')}
                margin="normal"
            />

            <FormControlLabel className={classes.switchControl}
               control={
                 <Switch
                        checked={chamberSettings.enable_cooler}
                        onChange={handleCheckboxChange('enable_cooler')}
                        value="enable_cooler"
                 />
               }
              label="Enable Cooler?"
             />

            <TextValidator
                  validators={['required', 'isFloat', 'minNumber:0', 'maxNumber:5']}
                  errorMessages={['Hysteresis low is required', "Must be a number", "Must be greater than 0 ", "Max value is 5"]}
                  name="hysteresis_low"
                  label="Hysteresis low"
                  className={classes.textField}
                  value={chamberSettings.hysteresis_low}
                  type="number"
                  onChange={handleValueChange('hysteresis_low')}
                  margin="normal"
              />

            <TextValidator
                validators={['required', 'isNumber', 'minNumber:0', 'maxNumber:3600000']}
                errorMessages={['Hysteresis high is required', "Must be a number", "Must be greater than 0 ", "Max value is 3600000"]}
                name="min_cooler_on_duration"
                label="min_cooler_on_duration high"
                className={classes.textField}
                value={chamberSettings.min_cooler_on_duration}
                type="number"
                onChange={handleValueChange('min_cooler_on_duration')}
                margin="normal"
            />

            <TextValidator
                validators={['required', 'isNumber', 'minNumber:0', 'maxNumber:3600000']}
                errorMessages={['Hysteresis high is required', "Must be a number", "Must be greater than 0 ", "Max value is 3600000"]}
                name="min_cooler_off_duration"
                label="min_cooler_off_duration high"
                className={classes.textField}
                value={chamberSettings.min_cooler_off_duration}
                type="number"
                onChange={handleValueChange('min_cooler_off_duration')}
                margin="normal"
            />

          <Button variant="raised" color="primary" className={classes.button} type="submit">
            Save
          </Button>
          <Button variant="raised" color="secondary" className={classes.button} onClick={onReset}>
      		  Reset
      		</Button>

        </ValidatorForm>

        :

        <div className={classes.loadingSettings}>
          <Typography variant="display1" className={classes.loadingSettingsDetails}>
            {errorMessage}
          </Typography>
          <Button variant="raised" color="secondary" className={classes.button} onClick={onReset}>
      		  Reset
      		</Button>
        </div>
      }
      </div>
    );
  }
}

ChamberSettingsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  chamberSettingsFetched: PropTypes.bool.isRequired,
  chamberSettings: PropTypes.object,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default withStyles(styles)(ChamberSettingsForm);