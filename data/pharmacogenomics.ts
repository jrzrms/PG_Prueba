
import { PharmacogenomicEntry } from '../types';

export const PGX_DATA: PharmacogenomicEntry[] = [
  // CYP2C19
  {
    id: 'clopidogrel-cyp2c19',
    drug: 'Clopidogrel',
    gene: 'CYP2C19',
    category: 'Cardiovascular',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'El gen impide la activación del profármaco.',
    clinicalNote: 'En metabolizadores intermedios (IM) o lentos (PM), evitar clopidogrel o duplicar la dosis.'
  },
  {
    id: 'omeprazol-cyp2c19',
    drug: 'Omeprazol',
    gene: 'CYP2C19',
    category: 'Gastrointestinal',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Alteración en el aclaramiento del fármaco.',
    clinicalNote: 'Monitorizar eficacia y ajustar dosis según respuesta clínica.'
  },
  {
    id: 'pantoprazol-cyp2c19',
    drug: 'Pantoprazol',
    gene: 'CYP2C19',
    category: 'Gastrointestinal',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Metabolismo alterado.',
    clinicalNote: 'Ajustar dosis en metabolizadores ultrarrápidos o lentos.'
  },
  {
    id: 'lansoprazol-cyp2c19',
    drug: 'Lansoprazol',
    gene: 'CYP2C19',
    category: 'Gastrointestinal',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Metabolismo alterado.',
    clinicalNote: 'Ajustar dosis según fenotipo CYP2C19.'
  },
  {
    id: 'escitalopram-cyp2c19',
    drug: 'Escitalopram',
    gene: 'CYP2C19',
    category: 'Psiquiatría',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Metabolismo hepático alterado.',
    clinicalNote: 'Ajustar dosis inicial o elegir alternativa para evitar efectos adversos.'
  },
  {
    id: 'sertralina-cyp2c19',
    drug: 'Sertralina',
    gene: 'CYP2C19',
    category: 'Psiquiatría',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Variabilidad en niveles plasmáticos.',
    clinicalNote: 'Considerar ajuste de dosis en PM/UM.'
  },
  {
    id: 'citalopram-cyp2c19',
    drug: 'Citalopram',
    gene: 'CYP2C19',
    category: 'Psiquiatría',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Metabolismo hepático.',
    clinicalNote: 'Ajustar dosis para evitar prolongación del intervalo QT en PM.'
  },
  {
    id: 'voriconazol-cyp2c19',
    drug: 'Voriconazol',
    gene: 'CYP2C19',
    category: 'Infectología',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Alta',
    mechanism: 'Riesgo de toxicidad o fallo terapéutico.',
    clinicalNote: 'Monitorización terapéutica de niveles de fármaco obligatoria.'
  },
  // SLCO1B1
  {
    id: 'atorvastatina-slco1b1',
    drug: 'Atorvastatina',
    gene: 'SLCO1B1',
    category: 'Cardiovascular',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Alta',
    mechanism: 'Transporte hepático reducido.',
    clinicalNote: 'Variante 521CC/TC: Mayor riesgo de miopatía. Se sugiere cambiar a otra estatina o advertir sobre dolores musculares.'
  },
  {
    id: 'simvastatina-slco1b1',
    drug: 'Simvastatina',
    gene: 'SLCO1B1',
    category: 'Cardiovascular',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'Mayor exposición sistémica.',
    clinicalNote: 'Riesgo elevado de miopatía. Se prefiere alternativa con menor dependencia de SLCO1B1.'
  },
  {
    id: 'rosuvastatina-slco1b1',
    drug: 'Rosuvastatina',
    gene: 'SLCO1B1',
    category: 'Cardiovascular',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Transporte hepático.',
    clinicalNote: 'Ajustar dosis máxima en portadores de variantes de riesgo.'
  },
  // CYP2C9
  {
    id: 'warfarina-cyp2c9',
    drug: 'Warfarina',
    gene: 'CYP2C9 & VKORC1',
    category: 'Cardiovascular',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Alta',
    mechanism: 'Sensibilidad aumentada.',
    clinicalNote: 'Reducir dosis inicial y monitorizar INR frecuentemente.'
  },
  {
    id: 'ibuprofeno-cyp2c9',
    drug: 'Ibuprofeno',
    gene: 'CYP2C9',
    category: 'Dolor',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Metabolismo lento.',
    clinicalNote: 'En metabolizadores lentos, usar dosis más bajas para evitar efectos gastrointestinales.'
  },
  {
    id: 'celecoxib-cyp2c9',
    drug: 'Celecoxib',
    gene: 'CYP2C9',
    category: 'Dolor',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Eliminación reducida.',
    clinicalNote: 'Iniciar con dosis baja y monitorizar.'
  },
  // CYP2D6
  {
    id: 'tramadol-cyp2d6',
    drug: 'Tramadol',
    gene: 'CYP2D6',
    category: 'Dolor',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Media',
    mechanism: 'Falta de activación.',
    clinicalNote: 'Ineficacia en PM. Riesgo de toxicidad en UM.'
  },
  {
    id: 'codeina-cyp2d6',
    drug: 'Codeína',
    gene: 'CYP2D6',
    category: 'Dolor',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'Conversión variable a morfina.',
    clinicalNote: 'Contraindicado en PM (ineficaz) y UM (riesgo de depresión respiratoria).'
  },
  {
    id: 'paroxetina-cyp2d6',
    drug: 'Paroxetina',
    gene: 'CYP2D6',
    category: 'Psiquiatría',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Saturación metabólica.',
    clinicalNote: 'Ajustar dosis para evitar efectos adversos según fenotipo metabolizador.'
  },
  {
    id: 'amitriptilina-cyp2d6',
    drug: 'Amitriptilina',
    gene: 'CYP2D6 & CYP2C19',
    category: 'Psiquiatría',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Alta',
    mechanism: 'Metabolismo complejo.',
    clinicalNote: 'Reducir dosis (30-80%) en IM/PM. En UM elegir alternativa por riesgo de cardiotoxicidad.'
  },
  {
    id: 'aripiprazol-cyp2d6',
    drug: 'Aripiprazol',
    gene: 'CYP2D6',
    category: 'Psiquiatría',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Media',
    mechanism: 'Metabolismo hepático.',
    clinicalNote: 'En PM: Reducir dosis máxima (ej. 10mg/día) para evitar toxicidad.'
  },
  // HLA & Otros
  {
    id: 'alopurinol-hla',
    drug: 'Alopurinol',
    gene: 'HLA-B*58:01',
    category: 'Reumatología',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'Hipersensibilidad inmunomediada.',
    clinicalNote: 'Riesgo de SJS/TEN. Si es positivo, usar febuxostat.'
  },
  {
    id: 'carbamazepina-hla',
    drug: 'Carbamazepina',
    gene: 'HLA-A*31:01 / B*15:02',
    category: 'Neurología',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'Reacciones cutáneas graves.',
    clinicalNote: 'Evitar si porta variantes de riesgo por peligro de SJS/TEN.'
  },
  {
    id: 'azatioprina-tpmt',
    drug: 'Azatioprina',
    gene: 'TPMT / NUDT15',
    category: 'Inmunología',
    recommendationType: 'Ajuste de Dosis',
    priority: 'Alta',
    mechanism: 'Toxicidad hematológica.',
    clinicalNote: 'Reducir dosis al 50% (IM) o 10% (PM) para evitar leucopenia mortal.'
  },
  {
    id: 'fluorouracilo-dpyd',
    drug: 'Fluorouracilo',
    gene: 'DPYD',
    category: 'Oncología',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'Deficiencia DPD.',
    clinicalNote: 'Contraindicado en deficiencia total. Reducir dosis 50% en parcial.'
  },
  {
    id: 'abacavir-hla',
    drug: 'Abacavir',
    gene: 'HLA-B*57:01',
    category: 'Infectología',
    recommendationType: 'Cambio de Fármaco',
    priority: 'Alta',
    mechanism: 'Hipersensibilidad fatal.',
    clinicalNote: 'Contraindicado si el paciente es HLA-B*57:01 positivo.'
  }
];

export const CATEGORIES = Array.from(new Set(PGX_DATA.map(d => d.category)));
