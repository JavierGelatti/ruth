import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSpring } from 'react-spring';
import Sidebar from '../sidebar-reunion/Sidebar';
import { ReunionContainer } from './Reunion.styled';
import TemaActual from '../tipos-vista-principal/TemaActual';
import Temario from '../temario/Temario';
import Presentacion from '../tipos-vista-principal/Presentacion';
import Debate from '../tipos-vista-principal/Debate';


const VistaTemas = (props) => {
  const esElSiguienteTemaATratar = () => indiceTemaAMostrar === indiceTemaATratar();
  const indiceTemaATratar = () => {
    const indiceTemaSinFinalizar = props.temas.findIndex((tema) => tema.fin === null);
    const ultimoTema = props.temas.length - 1;
    return indiceTemaSinFinalizar >= 0 ? indiceTemaSinFinalizar : ultimoTema;
  };

  const [selectedElement, setSelectedElement] = useState('Tema Actual');
  const [indiceTemaAMostrar, setIndiceAMostrar] = useState(indiceTemaATratar());
  const [temaSeleccionado, setTemaSeleccionado] = useState(props.temas[indiceTemaAMostrar]);

  useEffect(() => {
    setTemaSeleccionado(props.temas[indiceTemaAMostrar]);
  }, [indiceTemaAMostrar, props.temas]);
  const empezarTema = () => {
    if (temaSeleccionado.inicio !== null) {
      return toast.error('No se puede iniciar un tema que ya fue iniciado');
    }
    if (indiceTemaAMostrar !== indiceTemaATratar()) {
      return toast.error('Existe otro tema para tratar');
    }
    return props.actualizarTema({
      id: temaSeleccionado.id,
      inicio: Date.now(),
      fin: null,
    });
  };

  const terminarTema = () => {
    props.actualizarTema({
      id: temaSeleccionado.id,
      inicio: temaSeleccionado.inicio,
      fin: Date.now(),
    });
    toast.success('Tema finalizado');
  };

  const handleCerrarReunion = () => {
    if (temaActivo()) {
      terminarTema();
    }
    props.cerrarReunion();
  };

  const handleSelection = (name) => {
    setSelectedElement(name);
  };

  const seleccionarTema = (temaSeleccionado) => {
    const index = props.temas.findIndex((tema) => tema === temaSeleccionado);
    setIndiceAMostrar(index);
    setSelectedElement('Tema Actual');
  };

  const avanzarTema = () => {
    if (indiceTemaAMostrar !== props.temas.length - 1) {
      setIndiceAMostrar(indiceTemaAMostrar + 1);
    }
  };

  const retrocederTema = () => {
    if (indiceTemaAMostrar !== 0) {
      setIndiceAMostrar(indiceTemaAMostrar - 1);
    }
  };

  const segundosRestantes = () => {
    const { inicio, fin, cantidadDeMinutosDelTema } = temaSeleccionado;
    if (inicio === null) {
      return cantidadDeMinutosDelTema * 60;
    }
    const tiempo = fin === null ? Date.now() : Date.parse(fin);
    return Math.round(cantidadDeMinutosDelTema * 60
      - (tiempo - Date.parse(inicio)) / 1000);
  };

  const temaActivo = () => {
    const { inicio, fin } = temaSeleccionado;
    return inicio !== null && fin === null;
  };
  const VistaSeleccionada = vistas.findByName(selectedElement);
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <ReunionContainer style={fade}>
      <Temario temas={props.temas}
               seleccionarTema={seleccionarTema}/>
        <VistaSeleccionada
          selectedElement={selectedElement}
          tema={temaSeleccionado}
          terminarTema={terminarTema}
          empezarTema={empezarTema}
          segundosRestantes={segundosRestantes()}
          temaActivo={temaActivo()}
          avanzarTema={avanzarTema}
          retrocederTema={retrocederTema}
          temaATratar={esElSiguienteTemaATratar()}
          handleCerrarReunion={handleCerrarReunion}
        />
      <Sidebar
        handleSelection={handleSelection}
        selectedElement={selectedElement}
        link={temaSeleccionado.linkDePresentacion}/>
    </ReunionContainer>
  );
};

const vistas = {
  'Tema Actual': TemaActual,
  Presentación: Presentacion,
  Debate,
  findByName(name) {
    return this[name] || TemaActual;
  },
};
export default VistaTemas;
