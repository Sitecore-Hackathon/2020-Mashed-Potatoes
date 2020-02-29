import dynamic from 'next/dynamic';

const EventBanner = dynamic(() => import('./Feature/Events/EventBanner'));
const EventDetails = dynamic(() => import('./Feature/Events/EventDetails'));
const EventList = dynamic(() => import('./Feature/Events/EventList'));
const Subscribe = dynamic(() => import('./Feature/Events/Subscribe'));

const components = new Map<string, any>();

components.set('EventBanner', EventBanner);
components.set('EventList', EventList);
components.set('EventDetails', EventDetails);
components.set('Subscribe', Subscribe);

export default (componentName: string) => components.get(componentName);
