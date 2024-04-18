import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { PLANET_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = '徐徐科技';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '徐徐科技',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '徐徐科技',
          href: 'https://github.com/dashboard',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 徐徐 itHub
            </>
          ),
          href: 'https://github.com/Chancechance123',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
