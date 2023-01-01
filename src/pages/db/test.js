export default class Test {
  constructor(supabase) {
    this.supabase = supabase;
  }

  testFunction = async () => {
    const { data, error } = await this.supabase.from("test").select();

    return data;
  };
}
