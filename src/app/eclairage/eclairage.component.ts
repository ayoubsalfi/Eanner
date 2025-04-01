// eclairage.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-eclairage',
  templateUrl: './eclairage.component.html',
  styleUrls: ['./eclairage.component.css']
})
export class EclairageComponent {
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
  
  indoorFeatures = [
    {
      title: 'Energy-Efficient Lighting',
      description: 'Reduce your energy consumption with LED solutions that offer the perfect balance of brightness and customizability.'
    },
    {
      title: 'Mood Enhancement',
      description: 'We design lighting systems that match your interior style, enhance comfort, and create the right mood.'
    },
    {
      title: 'Smart Automation',
      description: 'Easily manage lighting with automation systems that offer convenience and efficiency.'
    }
  ];
  
  outdoorFeatures = [
    {
      title: 'Energy-Efficient Lighting',
      description: 'Reduce your energy consumption with LED solutions that offer the perfect balance of brightness and customizability.'
    },
    {
      title: 'Exterior Enhancement',
      description: 'We design lighting systems that match your exterior style, enhance security, and create the right ambiance.'
    },
    {
      title: 'Weather-Resistant Solutions',
      description: 'Our outdoor lighting systems are built to withstand all weather conditions while maintaining efficiency.'
    }
  ];
  
  securityFeatures = [
    {
      title: 'Advanced Technology',
      description: 'We offer cutting-edge solutions that integrate the latest security technologies.'
    },
    {
      title: 'Remote Monitoring',
      description: 'Access and control your security systems from anywhere using our secure mobile applications.'
    },
    {
      title: 'Integrated Systems',
      description: 'Our security solutions can be integrated with your smart home for seamless operation.'
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated team provides round-the-clock technical support for all your security needs.'
    }
  ];
}