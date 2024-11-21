import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  trainingForm: FormGroup;
  constructor(private apiService: ApiService) {
    this.trainingForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('ok');
      const training = new Training(
        undefined,
        form.value.name,
        form.value.description,
        form.value.price,
        1
      );
      this.apiService.postTraining(training).subscribe({
        next: (value) =>
          console.log('Observable emitted the next value: ' + value),
        error: (err) => console.error('Observable emitted an error: ' + err),
        complete: () =>
          console.log('Observable emitted the complete notification'),
      });
    }
  }
}
