import { TestBed } from '@angular/core/testing';
import { SqliteQueryService } from '@keira-shared/services/sqlite-query.service';
import { instance } from 'ts-mockito';
import { MockedSqliteQueryService } from '../../testing/mocks';
import { AreaSearchService } from './area-search.service';

describe('AreaSearchService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: SqliteQueryService, useValue: instance(MockedSqliteQueryService) }],
    }),
  );

  it('should be created', () => {
    const service: AreaSearchService = TestBed.inject(AreaSearchService);
    expect(service).toBeTruthy();
  });
});
