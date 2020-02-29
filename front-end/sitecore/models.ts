import { LayoutServiceContextData, RouteData } from '@sitecore-jss/sitecore-jss-react';

export interface LayoutServiceData<TExtendedContext = {}> {
  sitecore: {
    context: LayoutServiceContextData['context'] & TExtendedContext;
    route: RouteData;
  };
}
