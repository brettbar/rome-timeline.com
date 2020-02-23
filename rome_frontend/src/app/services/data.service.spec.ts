import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created',  async(inject([HttpTestingController, DataService],
    (httpClient: HttpTestingController, dataService: DataService) => {
    const service: DataService = TestBed.get(DataService);
    expect(dataService).toBeTruthy();
  })));
});
