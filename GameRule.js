function GameRule (){ // CONSTRUCTOR FUNCTION
    this.name = "";         // (String) : title line of the GameRule
    this.id = "";           // (String) : a unique identifier for the GameRule object
    this.body = "";         // (String) : markup text describing the rule
    this.scripts = {};      // (Object) : attached scripts used to generate stats and other
    this.data = {};         // (Object) : values the GameRule's scripts might use
    this.links = {};        // (Object) : relationships to other GameRules and Assets
}
