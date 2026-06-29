
export type RecommendationType = 'Cambio de Fármaco' | 'Ajuste de Dosis';
export type PriorityLevel = 'Alta' | 'Media' | 'Baja';

export interface PharmacogenomicEntry {
  id: string;
  drug: string;
  gene: string;
  category: string;
  recommendationType: RecommendationType;
  priority: PriorityLevel;
  clinicalNote: string;
  mechanism: string;
}

export interface MedicationOption {
  value: string;
  label: string;
}
