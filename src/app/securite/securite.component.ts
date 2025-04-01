import { Component } from '@angular/core';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent {
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

  // Vous pouvez ajouter ces tableaux pour diversifier le contenu si nécessaire
  surveillanceFeatures = [
    'High-definition cameras with remote access, night vision, and motion detection, ensuring 24/7 monitoring.',
    'Advanced AI-powered detection systems to identify suspicious activity and alert security personnel.'
  ];

  accessControlFeatures = [
    'Secure entry systems with multi-factor authentication to prevent unauthorized access.',
    'Digital logs of all entry and exit times for comprehensive security monitoring.'
  ];

  alarmSystemFeatures = [
    'Integrated alarm systems that connect directly to emergency services for rapid response.',
    'Custom alarm configurations based on your property s unique security requirements.'
  ];
  chooseBenefits = [
    {
      title: 'Advanced Technology',
      description: 'We offer cutting-edge solutions that integrate the latest security technologies.'
    },
    {
      title: 'Professional Installation',
      description: 'Our expert technicians ensure proper setup and configuration of all security components.'
    },
    {
      title: 'Customized Solutions',
      description: 'We design security systems tailored to your specific property needs and requirements.'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide continuous technical support and maintenance to keep your systems running optimally.'
    }
  ];
}