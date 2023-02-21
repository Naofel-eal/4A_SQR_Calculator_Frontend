import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class EventService{
    private numberClickedEvent = new BehaviorSubject<string>('');
    private operationClickedEvent = new BehaviorSubject<string>('');

    emitNumberEvent(msg: string){
        this.numberClickedEvent.next(msg)
    }
    numberEventListener(){
        return this.numberClickedEvent.asObservable();
    } 
    emitOperationEvent(msg: string){
        this.operationClickedEvent.next(msg)
    }
    operationEventListener(){
        return this.operationClickedEvent.asObservable();
    } 
}