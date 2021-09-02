import { isDef } from '@/utils/is';

let filterTags: any;

export const getters: any = {
  isLogin() {
    isDef(this.user.name) || isDef(this.user.email);
  },

  experience() {
    let ms = this.remains;
    ms = ms.filter((v: any) => v.tag in this.info);
    ms.forEach((v: any) => (v.content = this.info[v.tag]));
    return ms;
  },

  importedModules() {
    const { imported } = this.info.basic;
    // return imported.map((id) => getters.experience.find((v) => v.id === id));
    return imported.map((id: number) => this.experience.find((v: any) => v.id === id));
  },

  unimportedModules() {
    const { imported } = this.info.basic;
    return this.remains.filter((v: any) => !imported.includes(v.id));
  },
  socialTags() {
    const { social } = this.info.basic;
    return filterTags(social);
  },
  otherTags() {
    const { other, intension } = this.info.basic;
    Object.assign(other, intension);
    return filterTags(other);
  },
};

filterTags = (obj: any) => {
  const emptyTags = {};
  const tags = {};
  const views = {};
  for (const attr in obj) {
    if (obj[attr].value !== null) {
      // if(obj[attr].value !== undefined){}
      Object.assign(tags, { [attr]: obj[attr] });
      if (obj[attr].value !== '') Object.assign(views, { [attr]: obj[attr] });
    } else {
      Object.assign(emptyTags, { [attr]: obj[attr] });
    }
  }
  return { emptyTags, tags, views };
};
