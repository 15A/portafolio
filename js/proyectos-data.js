/* Información de cada proyecto. Para editar un texto, cambia solo este archivo.
   "descarga": ruta del archivo a descargar (ej. "assets/docs/inventra.pdf"). Vacío = el botón aún no lleva a nada. */
const PROYECTOS = {
  "inventra": {
    nombre: "Inventra Solutions", clase: "project-one", logo: "assets/img/proyectos/inventra.JPEG",
    categoria: "Software empresarial / ERP", etiquetas: ["Desarrollo de software", "Gestión, automatización e integración empresarial"],
    descarga: "",
    secciones: [
      { t: "¿Qué es?", p: [
        "Inventra Solutions es una propuesta de plataforma de gestión empresarial (ERP) diseñada para integrar, centralizar y optimizar los principales procesos administrativos y operativos de una organización.",
        "Su propósito es proporcionar a las empresas una herramienta tecnológica que permita administrar sus recursos, controlar sus operaciones y disponer de información confiable para tomar decisiones estratégicas.",
        "La plataforma plantea una arquitectura modular que permita adaptar sus funcionalidades a las necesidades particulares de cada empresa, evitando la fragmentación de información y la dependencia de múltiples herramientas independientes."] },
      { t: "Problema que busca resolver", p: ["Muchas pequeñas y medianas empresas administran sus operaciones mediante hojas de cálculo, registros manuales y sistemas que no se comunican entre sí. Esto genera:"],
        l: ["Duplicidad de información.", "Falta de trazabilidad de las operaciones.", "Errores administrativos y operativos.", "Dificultades en el control de inventarios.", "Información financiera y operativa dispersa.", "Limitaciones para medir el desempeño empresarial."] },
      { t: "Solución propuesta", p: ["Inventra busca ofrecer un entorno centralizado para gestionar los procesos empresariales, con una estructura modular y escalable. Entre sus posibles componentes funcionales:"],
        l: ["Administración de inventarios y almacenes.", "Compras y gestión de proveedores.", "Ventas y facturación.", "Control de productos y movimientos.", "Gestión administrativa.", "Reportes e indicadores de desempeño.", "Administración de usuarios y permisos.", "Historial y trazabilidad de operaciones."] },
      { t: "Oportunidades de negocio", p: ["Mercado objetivo: pequeñas y medianas empresas, distribuidores, comercios, empresas industriales y organizaciones que necesitan profesionalizar su administración.", "Oportunidades comerciales:"],
        l: ["Comercialización mediante licencias de uso.", "Modelo de suscripción mensual o anual (SaaS).", "Implementaciones personalizadas.", "Consultoría para digitalización de procesos.", "Soporte técnico y mantenimiento.", "Desarrollo de módulos adicionales según el sector empresarial."] }
    ],
    valor: "Transformar procesos administrativos dispersos en una estructura de gestión integrada, organizada y orientada a resultados."
  },
  "lean-vsm": {
    nombre: "Lean VSM Generator", clase: "project-two", logo: "assets/img/proyectos/lean-vsm.JPEG",
    categoria: "Ingeniería industrial / Lean Manufacturing", etiquetas: ["Innovación industrial", "Automatización del análisis de procesos productivos"],
    descarga: "",
    secciones: [
      { t: "¿Qué es?", p: [
        "Lean VSM Generator es una herramienta tecnológica concebida para automatizar la elaboración, visualización y análisis de mapas de flujo de valor (Value Stream Mapping – VSM).",
        "Su objetivo es facilitar el trabajo de ingenieros industriales, analistas de procesos y responsables de operaciones mediante la transformación de datos operativos en representaciones visuales que permitan comprender el comportamiento de un proceso productivo o logístico.",
        "A diferencia de la elaboración tradicional de mapas VSM, que suele requerir construcción manual y herramientas de diagramación, el sistema propone generar mapas estructurados a partir de información ingresada mediante plantillas de Excel."] },
      { t: "Problema que busca resolver", p: [
        "La elaboración tradicional de mapas de flujo de valor puede consumir una cantidad considerable de tiempo y dificultar la actualización de los análisis cuando cambian las condiciones operativas.",
        "Además, muchas organizaciones no disponen de herramientas que conecten los datos reales de sus operaciones con representaciones visuales de sus procesos."] },
      { t: "Solución propuesta", p: ["El sistema plantea las siguientes capacidades:"],
        l: ["Importación y validación de datos desde Excel.", "Generación automatizada de mapas VSM.", "Representación del flujo de materiales.", "Representación del flujo de información.", "Identificación de tiempos de ciclo y espera.", "Cálculo de Lead Time y tiempo de valor agregado.", "Identificación de desperdicios Lean.", "Comparación de estados actuales (AS-IS) y futuros (TO-BE).", "Simulación visual animada de los procesos.", "Exportación de mapas e informes en formatos PDF, PNG y Excel."],
        pf: ["Uno de sus elementos diferenciadores es la intención de incorporar animación bidimensional para representar el movimiento de materiales y la transmisión de información dentro de los procesos."] },
      { t: "Oportunidades de negocio", p: ["Mercado objetivo: empresas manufactureras, centros de distribución, operadores logísticos, consultoras industriales, ingenieros de procesos y profesionales Lean.", "Oportunidades comerciales:"],
        l: ["Licencias profesionales para ingenieros industriales.", "Suscripciones para empresas manufactureras.", "Servicios de diagnóstico y optimización de procesos.", "Consultoría Lean Manufacturing.", "Capacitación y formación empresarial.", "Integración con plataformas de análisis de datos."] }
    ],
    valor: "Convertir datos operativos en mapas de flujo de valor dinámicos, facilitando la identificación de desperdicios, restricciones y oportunidades de mejora continua."
  },
  "smart-puerto-cortes": {
    nombre: "Smart Puerto Cortés", clase: "project-three", logo: "assets/img/proyectos/smart-puerto-cortes.JPEG",
    categoria: "Smart City / Gobierno digital", etiquetas: ["Transformación digital urbana", "Tecnología aplicada a la gestión municipal"],
    descarga: "",
    secciones: [
      { t: "¿Qué es?", p: [
        "Smart Puerto Cortés es una propuesta de transformación digital urbana que busca aprovechar las tecnologías de información y comunicación para mejorar la gestión municipal, fortalecer la atención ciudadana y optimizar la coordinación de los servicios públicos.",
        "El proyecto plantea un ecosistema digital orientado a conectar instituciones, ciudadanos, servicios de emergencia y recursos disponibles dentro de la ciudad.",
        "Su visión es contribuir al desarrollo de un municipio más eficiente, conectado, accesible y preparado para responder a las necesidades de su población."] },
      { t: "Problema que busca resolver", p: [
        "Las ciudades enfrentan dificultades relacionadas con la coordinación institucional, la administración de recursos, la atención de emergencias y la comunicación entre ciudadanos y autoridades.",
        "Cuando la información se encuentra dispersa, la respuesta ante situaciones críticas puede volverse lenta y menos eficiente.",
        "En una ciudad con actividad portuaria, comercial, industrial y urbana como Puerto Cortés, la coordinación de servicios y recursos adquiere especial importancia."] },
      { t: "Solución propuesta", p: ["Smart Puerto Cortés contempla una visión de ecosistema digital que podría incorporar:"],
        l: ["Plataforma de atención ciudadana.", "Gestión y seguimiento de solicitudes municipales.", "Coordinación de emergencias.", "Administración de recursos disponibles.", "Gestión logística de asistencia humanitaria.", "Geolocalización de incidentes y necesidades.", "Comunicación entre instituciones y ciudadanos.", "Paneles de control para seguimiento de indicadores.", "Información sobre servicios y acontecimientos municipales."],
        pf: ["Un componente especialmente relevante es la posibilidad de desarrollar herramientas de coordinación logística y humanitaria, inspiradas en las necesidades de organizaciones de respuesta y asistencia, como la Cruz Roja."] },
      { t: "Oportunidades de negocio e impacto", p: ["Mercado objetivo: municipalidades, instituciones gubernamentales, organismos de emergencia, organizaciones humanitarias y entidades de cooperación internacional.", "Oportunidades:"],
        l: ["Implementación de soluciones de gobierno digital.", "Desarrollo de plataformas municipales.", "Contratos de transformación tecnológica.", "Cooperación con organismos internacionales.", "Sistemas de gestión de emergencias.", "Servicios de soporte y mantenimiento tecnológico."] }
    ],
    valor: "Utilizar la tecnología para mejorar la capacidad de respuesta institucional, facilitar la participación ciudadana y optimizar la administración de los recursos municipales."
  },
  "moventi": {
    nombre: "MOVENTI", clase: "project-four", logo: "assets/img/proyectos/moventi.JPEG",
    categoria: "Movilidad inteligente / Tecnología", etiquetas: ["Plataforma digital", "Conectividad, transporte y servicios bajo demanda"],
    descarga: "",
    secciones: [
      { t: "¿Qué es?", p: [
        "MOVENTI es un concepto de plataforma tecnológica de movilidad y transporte que busca conectar pasajeros, conductores y proveedores de servicios mediante un ecosistema digital accesible, eficiente y escalable.",
        "Su visión consiste en desarrollar una alternativa tecnológica que facilite la solicitud, asignación y administración de servicios de transporte, aprovechando herramientas de geolocalización, automatización y pagos digitales.",
        "El proyecto contempla un modelo de movilidad adaptable a las características del mercado hondureño, comenzando con una estrategia de lanzamiento en la zona norte del país."] },
      { t: "Problema que busca resolver", p: ["Los servicios de transporte presentan oportunidades de mejora relacionadas con:"],
        l: ["Dificultad para localizar transporte disponible.", "Falta de integración entre pasajeros y conductores.", "Limitaciones en los mecanismos de asignación de servicios.", "Ausencia de herramientas centralizadas de administración.", "Poca visibilidad sobre el recorrido y estado de los viajes.", "Alternativas limitadas de pago y seguimiento."] },
      { t: "Solución propuesta", p: ["MOVENTI plantea un ecosistema digital con los siguientes componentes:"],
        g: [
          { t: "Aplicación para pasajeros", l: ["Registro y administración de usuarios.", "Solicitud de servicios de transporte.", "Geolocalización y seguimiento de viajes.", "Visualización de información del conductor.", "Estimación del costo del servicio.", "Pagos en efectivo y digitales.", "Historial de viajes y calificaciones."] },
          { t: "Aplicación para conductores", l: ["Registro y validación de conductores.", "Administración de disponibilidad.", "Recepción automática de solicitudes.", "Navegación y seguimiento de servicios.", "Control de ingresos y viajes.", "Historial de operaciones."] },
          { t: "Plataforma administrativa", l: ["Administración de usuarios y conductores.", "Supervisión de operaciones.", "Control de servicios y comisiones.", "Indicadores de desempeño.", "Gestión de incidencias.", "Monitoreo de actividad de la plataforma."] }] },
      { t: "Modelo de negocio", p: [
        "La propuesta contempla una comisión del 15 % por servicio, con asignación automática de solicitudes y aceptación de pagos tanto en efectivo como digitales.",
        "El concepto también contempla la posibilidad de integrar diferentes categorías de vehículos y ampliar progresivamente el ecosistema hacia servicios complementarios."] },
      { t: "Oportunidades de negocio", p: ["Mercado objetivo: pasajeros particulares, conductores independientes, empresas de transporte, operadores de movilidad y comercios que requieran servicios de transporte.", "Oportunidades:"],
        l: ["Comisión por cada servicio realizado.", "Alianzas con conductores independientes.", "Convenios con empresas.", "Servicios de transporte corporativo.", "Integración de servicios de entrega y logística.", "Expansión territorial mediante modelos de operación locales."] }
    ],
    valor: "Desarrollar una plataforma de movilidad adaptada al mercado hondureño que conecte personas, conductores y oportunidades mediante tecnología accesible y una administración centralizada."
  },
  "industrial-analytics": {
    nombre: "Industrial Analytics", clase: "project-five", logo: "assets/img/proyectos/industrial-analytics.JPEG",
    categoria: "Business Intelligence / Ingeniería industrial", etiquetas: ["Inteligencia operativa", "Analítica de datos y control de operaciones"],
    descarga: "",
    secciones: [
      { t: "¿Qué es?", p: [
        "Industrial Analytics es una propuesta de solución tecnológica orientada a transformar los datos generados por las operaciones industriales en información útil para la supervisión, el análisis y la toma de decisiones.",
        "Su propósito es proporcionar herramientas de visualización y seguimiento de indicadores clave de desempeño (KPI), permitiendo a las organizaciones comprender mejor el comportamiento de sus procesos y detectar oportunidades de optimización.",
        "La iniciativa se relaciona con la visión de desarrollar InduTrack, una solución enfocada en el seguimiento y control de operaciones industriales."] },
      { t: "Problema que busca resolver", p: ["En numerosas organizaciones, los datos operativos se encuentran distribuidos en diferentes archivos, registros y sistemas, dificultando la identificación de problemas y la evaluación del rendimiento. Entre las principales dificultades se encuentran:"],
        l: ["Falta de indicadores centralizados.", "Seguimiento limitado de la productividad.", "Dificultad para identificar desviaciones.", "Escasa visibilidad del desempeño operativo.", "Dependencia de reportes manuales.", "Toma de decisiones basada en información incompleta o desactualizada."] },
      { t: "Solución propuesta", p: ["Industrial Analytics plantea una plataforma de análisis y visualización que permita centralizar indicadores operativos y facilitar su interpretación. Entre sus posibles áreas funcionales:"],
        l: ["Seguimiento de indicadores de producción.", "Análisis de productividad.", "Control de inventarios y movimientos.", "Seguimiento de operaciones logísticas.", "Análisis de tiempos y eficiencia.", "Identificación de desviaciones operativas.", "Visualización de tendencias.", "Generación de reportes gerenciales.", "Comparación de resultados entre períodos."],
        pf: ["La propuesta busca que los responsables de operaciones puedan pasar de una supervisión basada principalmente en registros históricos a un modelo de gestión apoyado en indicadores."] },
      { t: "Oportunidades de negocio", p: ["Mercado objetivo: empresas industriales, manufactureras, operadores logísticos, centros de distribución, empresas de servicios y consultoras de ingeniería.", "Oportunidades comerciales:"],
        l: ["Implementación de sistemas de inteligencia de negocios.", "Desarrollo de tableros de control personalizados.", "Suscripciones a plataformas analíticas.", "Consultoría en indicadores de gestión.", "Auditorías de desempeño operativo.", "Integración de información empresarial.", "Servicios de análisis y optimización de procesos."] }
    ],
    valor: "Convertir los datos de las operaciones en información estratégica para mejorar la productividad, fortalecer el control y respaldar decisiones empresariales."
  },
  "greenforge": {
    nombre: "GreenForge Energy", clase: "project-six", logo: "assets/img/proyectos/greenforge.JPEG",
    categoria: "Innovación / Energía sostenible", etiquetas: ["Sostenibilidad e innovación", "Soluciones energéticas y aprovechamiento de recursos"],
    descarga: "",
    secciones: [
      { t: "¿Qué es?", p: [
        "GreenForge Energy es un concepto de innovación orientado al desarrollo de soluciones energéticas sostenibles, aprovechamiento de recursos y tecnologías que contribuyan a reducir el impacto ambiental de las actividades productivas.",
        "Su visión consiste en explorar oportunidades para transformar recursos disponibles, especialmente aquellos que pueden ser aprovechados mediante procesos de recuperación, reutilización y valorización energética.",
        "El proyecto busca conectar sostenibilidad ambiental, innovación tecnológica y eficiencia en el uso de los recursos."] },
      { t: "Problema que busca resolver", p: ["Las actividades industriales, comerciales y urbanas generan residuos y consumen recursos energéticos que pueden representar oportunidades de optimización. Entre los desafíos que busca abordar se encuentran:"],
        l: ["Aprovechamiento limitado de residuos.", "Dependencia de fuentes energéticas convencionales.", "Costos asociados al consumo energético.", "Necesidad de mejorar la eficiencia de los recursos.", "Gestión inadecuada de determinados materiales.", "Creciente necesidad de soluciones sostenibles."] },
      { t: "Solución propuesta", p: ["GreenForge Energy plantea investigar, desarrollar y promover alternativas de innovación que integren:"],
        l: ["Aprovechamiento energético de residuos.", "Valorización de materiales recuperables.", "Soluciones de eficiencia energética.", "Exploración de tecnologías de energía renovable.", "Modelos de economía circular.", "Evaluación de oportunidades de generación energética.", "Soluciones sostenibles para empresas e industrias."],
        pf: ["El proyecto tiene una orientación hacia la investigación aplicada y el desarrollo de propuestas que puedan convertirse en soluciones técnicamente viables y económicamente sostenibles."] },
      { t: "Oportunidades de negocio", p: ["Mercado objetivo: empresas industriales, agroindustria, operadores de residuos, instituciones públicas, desarrolladores de proyectos energéticos y organizaciones comprometidas con la sostenibilidad.", "Oportunidades:"],
        l: ["Consultoría en eficiencia energética.", "Proyectos de aprovechamiento de residuos.", "Desarrollo de soluciones de economía circular.", "Alianzas con empresas industriales.", "Evaluación de proyectos de energía renovable.", "Cooperación con organismos ambientales.", "Desarrollo de proyectos de innovación sostenible."] }
    ],
    valor: "Convertir los desafíos ambientales y energéticos en oportunidades de innovación, aprovechamiento de recursos y desarrollo sostenible."
  }
};