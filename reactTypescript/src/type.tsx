type info = {
  id: number;
  email: string;
  name: string;
};
type AdminInfoList = info & {
  role: string;
  lastLogin: Date;
};

export { type info, type AdminInfoList };
