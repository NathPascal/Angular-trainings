import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTrainings() {
    return this.http.get<Training[]>(environment.host + '/trainings');
  }

  public getTraining(id: number) {
    return this.http.get<Training[]>(environment.host + '/trainings' + id);
  }

  public postTraining(training: Training) {
    return this.http.post<Training>(environment.host + '/trainings', training, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
