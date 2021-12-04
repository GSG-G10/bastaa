import * as muiModules from '../../mui-modules';

import style from './style';

const links = [
  'الإلكترونيات',
  'العقارات',
  'المركبات',
  'الأثاث',
  'الخدمات',
  'الرياضة',
  'الأجهزة',
];

const SectionList = () => (
  <muiModules.Box sx={style.body}>
    {links.map((e) => (
      <muiModules.Link sx={style.link} href={`/product/search/${e}`}>
        {e}
      </muiModules.Link>
    ))}
  </muiModules.Box>
);

export default SectionList;
