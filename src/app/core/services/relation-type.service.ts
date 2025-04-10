import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_PATH } from '../constants/api.consts';
import { RelationType } from '../models/relation-type.type';

@Injectable({
  providedIn: 'root',
})
export class RelationTypeService {
  private readonly http = inject(HttpClient);

  public getRelationTypeById(id: string): Observable<RelationType> {
    return this.http.get<RelationType>(`${BASE_PATH}/relation_types/${id}`);
  }

  public getAllRelationTypes(): Observable<RelationType[]> {
    return this.http.get<RelationType[]>(`${BASE_PATH}/relation_types`);
  }
}
