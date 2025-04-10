INSERT INTO profiles (name, title, bio, image_url) VALUES (
  'Jean-Pierre Berger, CIM',
  'President & Portfolio Manager',
  ARRAY[
    'Jean-Pierre (JP) is a Portfolio Manager and the founder of BlueSky Investment Counsel...',
    'He holds a bachelor of Finance at Bishop''s University in Quebec...',
    'Jean-Pierre also worked as Investment Advisor and Portfolio Manager...'
  ],
  '/founder.png'
);

INSERT INTO contact_info (title, content, icon) VALUES
  ('Our Office', '161 Bay St Toronto, Ontario, M5J 2S1 Canada', '/building-05.svg'),
  ('Call Us', '416-930-5550', '/phone.svg'),
  ('Email Us', 'contact@blueskyic.com', '/mail-01.svg');