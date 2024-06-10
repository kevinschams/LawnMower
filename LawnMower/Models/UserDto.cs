using System.ComponentModel.DataAnnotations;

namespace LawnMower.Models;
public class UserDto
{
    public required string Id { get; set; }
    
    public string? UserName { get; set; }
}