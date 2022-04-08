import { InjectionToken } from "@angular/core"


export interface API 
{
	url:string
}
export const APIconfig = {
	url:'hola.com'
}

export const CONFIG = new InjectionToken<API>('APIconfig');