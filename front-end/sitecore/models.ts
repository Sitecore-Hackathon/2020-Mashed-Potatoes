import { LayoutServiceContextData, RouteData, Field } from '@sitecore-jss/sitecore-jss-react';

export interface LayoutServiceData<TRouteFields = {}, TExtendedContext = {}> {
  sitecore: {
    context: LayoutServiceContextData['context'] & TExtendedContext;
    route: RouteData & { fields: TRouteFields };
  };
}

export interface SitecoreContext<TRouteFields = {}, TExtendedContext = {}> {
  sitecoreContext: LayoutServiceContextData['context'] &
    TExtendedContext & {
      route: RouteData & { fields: TRouteFields };
    };
}

export interface TextField extends Field<string> {}
export interface ImageField extends Field<{ src: string; alt: string }> {}
export interface BooleanField extends Field<boolean> {}
export interface LinkField extends Field<{ href: string }> {}

export interface Item<TFields> {
  id: string;
  name: string;
  displayName: string;
  fields: TFields;
}

export interface DropLinkField<TFields> {
  id: string;
  url: string;
  fields: TFields;
}

export interface LocationData {
  City: TextField;
  Country: TextField;
  Address: TextField;
}

export interface EventData {
  'Location': DropLinkField<LocationData>;
  'Subtitle': TextField;
  'Date': TextField;
  'ICS': LinkField;
  'Organizer': TextField;
  'Title': TextField;
  'Description': TextField;
  'Is Featured': BooleanField;
  'Event Banner': ImageField;
}
