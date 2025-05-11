import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombre: '',
  asistencia: '',
  mensaje: '',
  mensajeVisible: false,
  
};

export const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
    setAsistencia: (state, action) => {
      state.asistencia = action.payload;
    },
    setMensaje: (state, action) => {
      state.mensaje = action.payload;
    },
    mostrarMensaje: (state) => {
      state.mensajeVisible = true;
    },
    resetFormulario: () => initialState,
  },
});

export const { setNombre, setAsistencia, setMensaje, mostrarMensaje, resetFormulario } = rsvpSlice.actions;
export default rsvpSlice.reducer;
