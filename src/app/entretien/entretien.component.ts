import { Component } from '@angular/core';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent {
  securityIssues = [
    'Inefficient, outdated security systems that lack the latest features and leave vulnerabilities exposed.',
    'Unreliable monitoring with frequent false alarms that waste time and resources.',
    'Poor quality cameras and sensors that fail to capture critical security incidents.',
    'Difficult to manage security interfaces requiring specialized knowledge.'
  ];

  securityBenefits = [
    'State-of-the-art security systems with advanced features for comprehensive protection.',
    'Reliable 24/7 monitoring with smart algorithms that minimize false alarms and provide peace of mind.',
    'High-definition cameras and precise sensors that capture every detail and leave nothing to chance.',
    'User-friendly interfaces that make security management simple for everyone.'
  ];
}
