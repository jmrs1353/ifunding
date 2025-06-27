// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import FormProps from 'ui-component/forms/FormProps'
import FormInput from 'ui-component/forms/FormInput'
import FormAgregarAsesor from 'views/pages/asesor/FormAgregarAsesor';
// ==============================|| SAMPLE PAGE ||============================== //

export default function AgregarAsesor() {
  return (
    <MainCard title= "Agregar Asesor" secondary={<Typography variant="subtitle2">[Secondary Action]</Typography>}>
      <FormAgregarAsesor />
    </MainCard>
  );
}
