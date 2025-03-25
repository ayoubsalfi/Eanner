import { Component } from '@angular/core';

@Component({
  selector: 'app-installation-electrique',
  templateUrl: './installation-electrique.component.html',
  styleUrls: ['./installation-electrique.component.css']
})
export class InstallationElectriqueComponent {
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

  serviceFeatures = [
    {
      title: 'Surveillance Systems',
      description: 'High-definition CCTV cameras with advanced motion detection, night vision, and remote access capabilities.'
    },
    {
      title: 'Alarm Systems',
      description: 'Comprehensive alarm solutions with multiple sensors and intelligent monitoring to protect your property.'
    },
    {
      title: 'Access Control',
      description: 'Secure entry points with biometric systems, key cards, or PIN codes to restrict unauthorized access.'
    },
    {
      title: 'Smart Integration',
      description: 'Connect all security systems to your smart home or business infrastructure for centralized control.'
    }
  ];

  chooseReasons = [
    {
      title: 'Advanced Technology',
      description: 'We offer cutting-edge solutions that integrate the latest security technologies.'
    },
    {
      title: 'Experienced Professionals',
      description: 'Our team of certified security experts brings years of industry experience to every installation.'
    },
    {
      title: 'Customized Solutions',
      description: 'We design security systems tailored to your specific needs and property requirements.'
    },
    {
      title: 'Reliable Support',
      description: 'Our dedicated support team is available 24/7 to assist with any security concerns or maintenance needs.'
    }
  ];
}