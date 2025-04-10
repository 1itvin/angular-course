import { RelationTypeService } from './../../core/services/relation-type.service';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Genre } from '../../core/models/genre.type';
import { GenreCardComponent } from '../../shared/genre-card/genre-card.component';
import { GenreService } from '../../core/services/genre.service';
import { RelationType } from '../../core/models/relation-type.type';

@Component({
  selector: 'app-categories',
  imports: [
    // components
    GenreCardComponent,

    // modules
    MatDividerModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  public genres: Genre[] = [];
  public relationTypes: RelationType[] = [];

  private readonly destroyRef = inject(DestroyRef);
  private readonly genreService = inject(GenreService);
  private readonly relationTypeService = inject(RelationTypeService);

  public ngOnInit() {
    this.genreService
      .getAllGenres()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((genres) => {
        this.genres = genres;
      });

    this.relationTypeService
      .getAllRelationTypes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((relationTypes) => {
        this.relationTypes = relationTypes;
      });
  }
}
