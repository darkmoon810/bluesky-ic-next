-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clean existing data
TRUNCATE profiles, contact_info, insights RESTART IDENTITY CASCADE;

-- Seed profiles data
INSERT INTO profiles (name, title, bio, image_url) 
VALUES (
  'Jean-Pierre Berger, CIM',
  'President & Portfolio Manager',
  ARRAY[
    'Jean-Pierre (JP) is a Portfolio Manager and the founder of BlueSky Investment Counsel. Throughout his career, JP has focused on providing customized wealth management solutions to high-net-worth individuals and entrepreneurs.',
    'He holds a bachelor of Finance at Bishop''s University in Quebec and earned his Chartered Investment Manager (CIM) designation, which is required to be registered as a Portfolio Manager in Canada.',
    'Jean-Pierre also worked as Investment Advisor and Portfolio Manager for two of Canada''s largest banks before founding BlueSky Investment Counsel.'
  ],
  '/images/founder.png'
);

-- Seed contact info
INSERT INTO contact_info (title, content, icon) 
VALUES 
  ('Our Office', '161 Bay St Toronto, Ontario, M5J 2S1 Canada', '/icons/building-05.svg'),
  ('Call Us', '416-930-5550', '/icons/phone.svg'),
  ('Email Us', 'contact@blueskyic.com', '/icons/mail-01.svg');

-- Seed insights
INSERT INTO insights (title, content, category, date) 
VALUES 
  (
    'Why a Balanced Portfolio Strategy is Important',
    'In a world of increasing market volatility, maintaining a balanced portfolio has never been more crucial. This approach helps mitigate risks while optimizing returns across different market conditions.',
    'Investment Strategy',
    CURRENT_DATE
  ),
  (
    'Understanding Market Cycles',
    'Market cycles are natural economic patterns that can significantly impact investment returns. Understanding these cycles is crucial for making informed investment decisions.',
    'Market Analysis',
    CURRENT_DATE - INTERVAL '1 day'
  ),
  (
    'The Role of Fixed Income in Your Portfolio',
    'Fixed income investments play a crucial role in portfolio diversification and risk management. Learn how bonds and other fixed-income securities can protect your wealth.',
    'Investment Strategy',
    CURRENT_DATE - INTERVAL '2 days'
  );