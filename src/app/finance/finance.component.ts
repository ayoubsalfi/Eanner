import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  title = 'Investor Relations';
  subtitle = 'Invest in Innovation and Sustainability';
  description = 'Join us in driving the future of innovation, sustainability, and growth across key sectors';
  companyStatement = 'eaneer offers a unique opportunity to be part of a forward-thinking company committed to creating long-term value.';
  
  sustainableImpactTitle = 'Sustainable Impact';
  sustainableImpactDescription = 'Investing with eaneer means supporting initiatives that reduce environmental impact, improve energy efficiency, and foster community development.';
  
  investorResourcesTitle = 'Investor Resources';
  
  financialReports = {
    title: 'Financial Reports',
    description: 'Access our latest financial statements, quarterly earnings, and annual reports to stay informed about Eaneer\'s financial health and performance.'
  };
  
  investorPresentations = {
    title: 'Investor Presentations',
    description: 'Download detailed presentations that outline our strategic vision, market positioning, and growth prospects.'
  };
  
  corporateGovernance = {
    title: 'Corporate Governance',
    description: 'Review our corporate governance policies, ensuring Eaneer operates with the highest standards of ethics, transparency, and accountability.'
  };
  
  features = [
    {
      title: 'Diverse Portfolio',
      description: 'eaneer operates in high-growth sectors including construction, industrial automation, green energy, and agriculture, providing a well-balanced portfolio that mitigates risk and maximizes returns.',
      image: 'assets/finance1.jpg'
    },
    {
      title: 'Proven Financial Performance',
      description: 'With a strong track record of financial growth and stability, eaneer is positioned to deliver consistent returns, supported by our strategic investments in innovation and expansion.',
      image: 'assets/finance2.jpg'
    },
    {
      title: 'Commitment to Sustainability',
      description: 'Invest in a company that prioritizes sustainability. eaneer integrates eco-friendly practices across all operations, ensuring that your investment supports a greener future.',
      image: 'assets/finance3.jpg'
    },
    {
      title: 'Transparent Relations',
      description: 'We maintain open communication with our investors, providing regular updates on our financial health, strategic initiatives, and market opportunities, fostering trust and confidence.',
      image: 'assets/finance4.jpg'
    }
  ];
  
  sectors = [
    {
      name: 'Construction',
      description: 'Innovative building solutions'
    },
    {
      name: 'Industrial Automation',
      description: 'Smart manufacturing systems'
    },
    {
      name: 'Green Energy',
      description: 'Sustainable power solutions'
    },
    {
      name: 'Agriculture',
      description: 'Modern farming technologies'
    }
  ];
}
