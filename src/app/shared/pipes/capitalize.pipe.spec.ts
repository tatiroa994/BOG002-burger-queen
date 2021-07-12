import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capitalize } from './capitalize.pipe';

describe('capitalize', () => {
  it('should capitalize the first letter in every word', () => {
    const pipe = new Capitalize();
    expect(pipe.transform('ana maria')).toBe('Ana Maria')
  });
});
