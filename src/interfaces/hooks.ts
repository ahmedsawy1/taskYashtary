export interface INavigation {
  navigate: (route: string, data?: {}) => void;
  goBack?: () => void;
  openDrawer?: () => void;
  name?: string;
}
