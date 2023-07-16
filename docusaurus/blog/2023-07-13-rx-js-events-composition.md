---
slug: rx-js-event-forwarding
title: RxJS Event Forwarding
authors: dradu

tags: [rxjs, event-forwarding, angular]
---

```typescript
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp.html',
})
export class App implements OnInit {
  name = 'Angular';

  extras$ = of({ extra: 'extra data for event' });

  array = ['A', 'B', 'C', 'D', 'E'];

  event$ = interval(1000).pipe(
    take(this.array.length),
    map((i) => this.array[i])
  );

  ngOnInit() {
    this.event$.subscribe((ev) => {
      this.extras$.pipe(take(1)).subscribe((r) => {
        console.log('Throw new event with: ', r, ev);
      });
    });
  }
}
```
