export interface CvModule {
  id: number;
  tag: string;
  name: string;
  num?: number;
  total?: number;
  desc: string;
  img: string;
  content: string | null;
  multiple: boolean;
  ref?: boolean;
}

interface Item {
  desc: string;
  value: string | number | null;
}

type FormItem = Item & { placeholder?: string };

interface BasicModule {
  imported: number[];
  user: {
    name: Item;
    avatar: {
      desc: string;
      src: string;
    };
  };
  contact: {
    telephone: Item;
    email: Item;
    city: Item;
  };
  social: {
    website: FormItem;
    linkIn: FormItem;
    weChat: FormItem;
  };
  other: {
    age: FormItem;
    sex: FormItem;
  };
  intension: {
    workIntension: FormItem;
    currentJob: FormItem;
    expectSalary: FormItem;
  };
}

interface SingularModule {
  ref: boolean;
  desc: string;
  update: Date;
}

interface PluralModule {
  ref: boolean;
  name: FormItem;
  timeSpan: {
    start: string;
    end: string;
  };
  attrs: {
    post: Item;
    scholar?: Item;
    department?: Item;
  };
  location: FormItem;
  desc: string;
  update: Date;
}

export interface CvInfo {
  basic: BasicModule[];
  skill?: SingularModule[];
  job?: PluralModule[];
  project?: PluralModule[];
  edu?: PluralModule[];
  summary?: SingularModule[];
}

export interface UserInfo {
  name: string;
  email?: string;
  avatar_url: string;
  _id?: string;
  key?: string;
  role?: string;
}
