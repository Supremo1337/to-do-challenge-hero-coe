interface PriorityIndicatatorProps {
  priority: "HIGH" | "MEDIUM" | "LOW";
  // $priority: string;
}

export const priorityButtons: PriorityIndicatatorProps[] = [
  { priority: "HIGH" },
  { priority: "MEDIUM" },
  { priority: "LOW" },
];
