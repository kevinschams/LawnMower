using System.ComponentModel.DataAnnotations;

namespace LawnMower.Models;
public class EmailLoginDetails
{
    public required string Email { get; set; }

    public required string Password { get; set; }
}