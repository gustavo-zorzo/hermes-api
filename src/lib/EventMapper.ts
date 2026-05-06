export interface EventMapper<TInput, TOutput> {
  toPayload(input: TInput): TOutput;
}
