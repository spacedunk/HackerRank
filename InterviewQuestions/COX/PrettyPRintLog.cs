/*
We have a Java class that models navigation items for our client websites.
There is a root level item which is not displayed, but contains a list of child items.
These child items may have child items, which may also have child items, to an arbitrary level of depth.
 
Write a method in Java that takes in the root level NavigationItem and prints out the navigation structure in a format that
a non-developer could understand and use to help them troubleshoot issues with a site. You can assume that 
all Lists of children are non-null and have length of zero when they are empty.
 
public class NavigationItem {
   public String url;
   public String label;
   public List<NavigationItem> children;

}
*/

l1:u1
	l1:u1


pretty
public void PrettyPrint(NavigationItem head)
{
	if(head == null) return;
  foreach(NavigationItem item in head.children)
  {
  	 PrettyPrintString(item,0);
  }
}

public string PrettyPrintString(NavigationItem head, int depth)
{
	if(head == null) return;
  
  string tabs = "";
  
  for(int i = 0; i < depth; i++) tabs += '\t';
  
  Console.WriteLine(tabs + head.label + ":" head.url);
  
  //depth++;
  
  foreach(NavigationItem item in head.children)
  {
  	PrettyPrintString(item, depth + 1);
  }
} 